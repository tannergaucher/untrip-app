import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Edit } from "grommet-icons"
import { navigate } from "gatsby"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { AuthTabs } from "../components/auth"
import { SEO, Share } from "../components/elements"
import {
  ContentAsideGrid,
  Divider,
  Button,
  Form,
  Input,
} from "../components/styles"
import {
  IS_LOGGED_IN,
  CURRENT_USER_QUERY,
  UPDATE_LIST_MUTATION,
  DELETE_LIST_MUTATION,
  REMOVE_FROM_LIST_MUTATION,
} from "../components/apollo/graphql"

const StyledListPage = styled.div`
  .content-title,
  .aside-title {
    text-transform: uppercase;
    font-weight: 300;
    margin-top: 0;
  }
`

export default function ListsPage() {
  const { data } = useQuery(IS_LOGGED_IN)

  return (
    <StyledListPage>
      <ContentAsideGrid>
        <div className="content">
          {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
        </div>
        {/* <aside>
          <div className="sticky">
            <h2 className="aside-title">Favorites</h2>
            <Divider bgLight={true} />
          </div>
        </aside> */}
      </ContentAsideGrid>
    </StyledListPage>
  )
}

function UserLists() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  return (
    <>
      <SEO title={`My Untrips | Untrip`} />
      <>
        {loading && `loading...`}
        {error && `Error: ${error.message}`}
        {data && data.me && data.me.lists.length === 0 && (
          <h1>You don't have any lists yet. Make one!</h1>
        )}
        <>
          {data &&
            data.me &&
            data.me.lists.map(list => {
              if (list.places.length === 0) {
                return <h4>{`Oops, ${list.title}has no places yet`}</h4>
              }
              return <ListItem list={list} key={list.id} />
            })}
        </>
      </>
    </>
  )
}

const StyledListItem = styled.div`
  .title-edit {
    display: flex;

    button {
      margin-left: 0.5rem;
      border: none;
      color: grey;
    }
  }

  .edit-form {
    button {
      margin-bottom: 2rem;
    }
  }

  .list-title {
    margin-bottom: 1.5rem;
    font-weight: 900;
  }

  .list-length {
    margin: 0;
  }

  .list-places {
    display: flex;
    flex-direction: column;
  }

  .delete-list-btn {
    margin-top: 1rem;
  }
`

function ListItem({ list }) {
  const [isEdit, setIsEdit] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState("")

  const [updateList] = useMutation(UPDATE_LIST_MUTATION, {
    variables: {
      listId: list.id,
      title: updatedTitle,
    },
    optimisticResponse: {
      __typename: "Mutation",
      updateList: {
        __typename: "List",
        id: list.id,
        title: updatedTitle,
        places: list.places,
      },
    },
  })

  return (
    <StyledListItem>
      <div className="title-edit">
        <h2 className="list-title">{list.title}</h2>
        <Button onClick={() => setIsEdit(!isEdit)}>
          <Edit color="var(--black)" size="20px" />
        </Button>
      </div>
      {isEdit && (
        <div className="edit-form">
          <Form
            onSubmit={async e => {
              e.preventDefault()
              setIsEdit(false)
              await updateList()
            }}
          >
            <Input
              defaultValue={list.title}
              onChange={e => setUpdatedTitle(e.target.value)}
            />
            <Button primary>Save</Button>
          </Form>
        </div>
      )}
      <div className="list-places">
        {list.places.map(place => (
          <ListPlace key={place.id} place={place} list={list} isEdit={isEdit} />
        ))}
      </div>
      {!isEdit && <Share />}
      {!isEdit && (
        <Button primary onClick={() => navigate(`/app/list/${list.id}`)}>
          View List
        </Button>
      )}
      {isEdit && <DeleteListButton listId={list.id} />}
      <Divider bgLight={true} />
    </StyledListItem>
  )
}

function DeleteListButton({ listId }) {
  const [deleteList, { loading }] = useMutation(DELETE_LIST_MUTATION, {
    variables: {
      listId,
    },

    optimisticResponse: {
      __typename: "Mutation",
      deleteList: {
        __typename: "List",
        id: listId,
      },
    },

    update: cache => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })
      const updatedLists = data.me.lists.filter(list => list.id !== listId)
      cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          ...data,
          me: {
            ...data.me,
            lists: updatedLists,
          },
        },
      })
    },
  })

  return (
    <Button
      className="delete-list-btn"
      disabled={loading}
      onClick={() => deleteList()}
      style={{
        color: `var(--accent)`,
        border: `var(--accent)`,
      }}
    >
      Delete List
    </Button>
  )
}

const StyledListPlace = styled.div`
  .img-place-name {
    display: flex;
  }

  .place-delete-btn {
    height: 60px;
  }
`

function ListPlace({ place, list, isEdit }) {
  const [removeFromList] = useMutation(REMOVE_FROM_LIST_MUTATION, {
    variables: {
      listPlaceId: place.id,
    },
    optimisticResponse: {
      __typename: "Mutation",
      removeFromList: {
        __typename: "ListPlace",
        id: place.id,
      },
    },
    update: cache => {
      const data = cache.readQuery({ query: CURRENT_USER_QUERY })

      const listIndex = data.me.lists.findIndex(
        cacheList => cacheList.id === list.id
      )

      const updatedList = {
        ...data.me.lists[listIndex],
        places: data.me.lists[listIndex].places.filter(
          cachePlace => cachePlace.id !== place.id
        ),
      }

      cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: {
          ...data,
          me: {
            ...data.me,
            lists: [
              ...data.me.lists.slice(0, listIndex),
              updatedList,
              ...data.me.lists.slice(listIndex + 1),
            ],
          },
        },
      })
    },
  })

  return (
    <StyledListPlace>
      <div className="img-place-name">
        <Img
          fluid={JSON.parse(place.imageUrl)}
          style={{
            height: `60px`,
            width: `80px`,
            marginRight: `1rem`,
            marginBottom: `1rem`,
          }}
        />
        {isEdit ? (
          <Button className="place-delete-btn" onClick={() => removeFromList()}>
            X {place.name}
          </Button>
        ) : (
          <h2>{place.name}</h2>
        )}
      </div>
    </StyledListPlace>
  )
}

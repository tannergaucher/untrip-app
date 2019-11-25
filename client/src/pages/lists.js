import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Edit } from "grommet-icons"
import { navigate } from "gatsby"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { AuthTabs } from "../components/auth"
import { SEO, Share } from "../components/elements"
import { ContentAsideGrid, Button, Form, Input } from "../components/styles"
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
  const { loading, data } = useQuery(IS_LOGGED_IN)

  if (loading) return

  return (
    <StyledListPage className="responsive-padding">
      <ContentAsideGrid>
        <div className="content">
          {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
        </div>
        {/* TODO: Display user's liked posts <aside></aside> */}
      </ContentAsideGrid>
    </StyledListPage>
  )
}

function UserLists() {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) return `Loading...`
  if (error) return `Error: ${error.message}`

  return (
    <>
      <SEO title={`My Lists`} />
      <>
        {data && data.me && data.me.lists.length === 0 && (
          <h3>You don't have any lists yet. Make one!</h3>
        )}
        <>
          {data &&
            data.me &&
            data.me.lists.map(list => {
              return <ListItem list={list} key={list.id} />
            })}
        </>
      </>
    </>
  )
}

const StyledListItem = styled.div`
  margin-bottom: var(--space-xl);

  .title-edit {
    display: flex;

    button {
      margin-left: var(--space-md);
      border: none;
      color: grey;
    }
  }

  .edit-form {
    button {
      margin-bottom: var(--space-lg);
    }
  }

  .list-length {
    margin: 0;
  }

  .list-places {
    display: flex;
    flex-direction: column;
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
          <Edit
            color={`${isEdit ? "var(--black)" : "var(--grey)"}`}
            size="20px"
          />
        </Button>
      </div>
      {!isEdit && <Share />}
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
      {!isEdit && (
        <Button primary onClick={() => navigate(`/app/list/${list.id}`)}>
          View List
        </Button>
      )}
      {isEdit && <DeleteListButton listId={list.id} />}
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
        borderColor: `var(--accent)`,
      }}
    >
      Delete List
    </Button>
  )
}

const StyledListPlace = styled.div`
  .img-place-name {
    display: flex;
    align-items: flex-start;
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
          fixed={JSON.parse(place.imageUrl)}
          style={{
            marginRight: `var(--space-md)`,
            marginBottom: `var(--space-md)`,
          }}
        />
        {isEdit ? (
          <Button
            className="place-delete-btn"
            onClick={() => removeFromList()}
            style={{ minHeight: `60px` }}
          >
            X {place.name}
          </Button>
        ) : (
          <h4>{place.name}</h4>
        )}
      </div>
    </StyledListPlace>
  )
}

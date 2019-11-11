import React, { useState } from "react"
import { navigate } from "gatsby"
import { useQuery, useMutation } from "@apollo/react-hooks"
import styled from "styled-components"
import Img from "gatsby-image"
import { Edit } from "grommet-icons"

import { AuthTabs } from "../components/auth"
import {
  ContentAsideGrid,
  Divider,
  Button,
  Form,
  Input,
} from "../components/styles"
import { SEO, Loading, Share } from "../components/elements"
import {
  IS_LOGGED_IN,
  CURRENT_USER_QUERY,
  TOGGLE_PLACE_MUTATION,
  UPDATE_LIST_MUTATION,
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
          {/* <h2 className="content-title">My Lists</h2>
          <Divider bgLight={true} /> */}
          {data && data.isLoggedIn ? <UserLists /> : <AuthTabs />}
        </div>
        <aside>
          <div className="sticky">
            <h2 className="aside-title">Favorites</h2>
            <Divider bgLight={true} />
          </div>
        </aside>
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
        {loading && <Loading message="Loading lists..." />}
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
              return <ListItem list={list} />
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
  }
`

function ListItem({ list }) {
  const [isEdit, setIsEdit] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState("")

  const [updateList, { loading, error }] = useMutation(UPDATE_LIST_MUTATION, {
    variables: {
      listId: list.id,
      title: updatedTitle,
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
              const res = await updateList()
              setIsEdit(false)
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
      <Share />
      <Button primary onClick={() => navigate(`/app/list/${list.id}`)}>
        View List
      </Button>
      <Divider bgLight={true} />
    </StyledListItem>
  )
}

const StyledListPlace = styled.div``

function ListPlace({ place, list, isEdit }) {
  console.log(place)

  const [togglePlace, { loading, error }] = useMutation(TOGGLE_PLACE_MUTATION, {
    variables: {
      listId: list.id,
      sanityId: place.sanityId,
      name: place.name,
      imageUrl: place.imageUrl,
      slug: place.slug,
      lat: place.lat,
      lng: place.lng,
    },
  })

  return (
    <StyledListPlace>
      <div className="list-place">
        <Img
          fluid={JSON.parse(place.imageUrl)}
          style={{
            height: `60px`,
            width: `80px`,
            marginRight: `1rem`,
            marginBottom: `1rem`,
          }}
        />
        {isEdit && (
          <Button
            disabled={loading}
            onClick={async () => {
              const res = await togglePlace()
            }}
          >
            X
          </Button>
        )}
      </div>
    </StyledListPlace>
  )
}

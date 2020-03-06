import {
  CURRENT_USER_QUERY,
  DELETE_LIST_PLACE_MUTATION,
} from "../apollo/graphql"
import { DeleteListButton, EditListTitleForm } from "."
import React, { useState } from "react"

import { Layer } from "grommet"
import { useMutation } from "@apollo/react-hooks"

export default function EditListModal({ list }) {
  const [show, setShow] = useState(false)
  const [showEditTitle, setShowEditTitle] = useState(false)

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Edit
      </button>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
          style={{
            color: `var(--text-color)`,
            background: `var(--bg-1)`,
            borderRadius: `var(--radius)`,
            padding: `var(--space-sm)`,
            opacity: `1`,
            height: `100vh`,
            width: `100vw`,
          }}
        >
          <button
            className="btn"
            onClick={() => setShow(false)}
            style={{
              margin: 0,
              alignSelf: `flex-end`,
              borderColor: `var(--bg-1)`,
            }}
          >
            X
          </button>
          <div className="page container center">
            {showEditTitle ? (
              <div>
                <br />
                <EditListTitleForm
                  list={list}
                  setShowEditTitle={setShowEditTitle}
                />
                <br />
              </div>
            ) : (
              <h1>{list.title}</h1>
            )}
            {list.places.map(place => (
              <DeleteListPlaceButton list={list} place={place} key={place.id} />
            ))}
            <hr />
            <DeleteListButton listId={list.id} />
            <button
              className="btn"
              style={{
                borderColor: `var(--bg-1)`,
                marginLeft: `var(--space-sm)`,
              }}
              onClick={() => {
                setShowEditTitle(!showEditTitle)
              }}
            >
              Edit Title
            </button>
          </div>
        </Layer>
      )}
    </>
  )
}

function DeleteListPlaceButton({ list, place }) {
  const [deleteListPlace] = useMutation(DELETE_LIST_PLACE_MUTATION, {
    variables: {
      listId: list.id,
      listPlaceSanityId: place.sanityId,
    },

    optimisticResponse: {
      __typename: "Mutation",
      deleteListPlace: {
        __typename: "ListPlace",
        id: place.id,
        listId: list.id,
        listPlaceSanityId: place.sanityId,
      },
    },

    update: (cache, payload) => {
      try {
        const data = cache.readQuery({ query: CURRENT_USER_QUERY })
        const listIndex = data.me.lists.findIndex(
          cacheList => cacheList.id === list.id
        )

        const updatedList = {
          ...data.me.lists[listIndex],
          places: data.me.lists[listIndex].places.filter(
            cacheListPlace =>
              cacheListPlace.id !== payload.data.deleteListPlace.id
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
      } catch (error) {
        console.log(error)
      }
    },
  })

  return (
    <button className="btn btn-primary" onClick={() => deleteListPlace()}>
      {place.name}
    </button>
  )
}

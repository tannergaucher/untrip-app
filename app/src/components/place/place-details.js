import React, { useState } from "react"
import { Box, Button, Anchor, Text } from "grommet"
import {
  Facebook,
  Instagram,
  Twitter,
  Domain,
  Phone,
  Map,
  CaretNext,
  CaretDown,
} from "grommet-icons"

export default function PlaceDetails({ place }) {
  const [show, setShow] = useState(false)

  return (
    <Box>
      <Button
        onClick={() => setShow(!show)}
        label={<Text color="dark-2">Details</Text>}
        plain={true}
        gap="xsmall"
        icon={show ? <CaretDown size="small" /> : <CaretNext size="small" />}
      />

      {show && (
        // TODO EXTRACT TO COMPONENT
        <Box margin={{ vertical: "small" }}>
          {place.place.location && (
            <Box margin={{ vertical: "small" }}>
              <Anchor label="On Google Maps" icon={<Map size="18px" />} />
            </Box>
          )}

          {place.place.facebookLink && (
            <Box margin={{ vertical: "small" }}>
              <Anchor
                href={place.place.facebookLink}
                label="Facebook"
                icon={<Facebook size="18px" />}
              />
            </Box>
          )}

          {place.place.instagramLink && (
            <Box margin={{ vertical: "small" }}>
              <Anchor
                href={place.place.instagramLink}
                label="Instagram"
                icon={<Instagram size="18px" />}
              />
            </Box>
          )}

          {place.place.twitterLink && (
            <Box margin={{ vertical: "small" }}>
              <Anchor
                href={place.place.twitterLink}
                label="Twitter"
                icon={<Twitter size="18px" />}
              />
            </Box>
          )}

          {place.place.websiteLink && (
            <Box margin={{ vertical: "small" }}>
              <Anchor
                href={place.place.websiteLink}
                label="Website"
                icon={<Domain size="18px" />}
              />
            </Box>
          )}

          {place.place.phoneNumber && (
            <Box margin={{ vertical: "small" }}>
              <Anchor
                icon={<Phone size="18px" />}
                label={place.place.phoneNumber}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  )
}

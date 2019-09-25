import React, { useState } from "react"
import { Box, Button, Anchor } from "grommet"
import { Facebook, Instagram, Twitter, Domain, Phone, Map } from "grommet-icons"

export default function PlaceDetails({ place }) {
  const [show, setShow] = useState(false)

  return (
    <Box>
      <Button
        onClick={() => setShow(!show)}
        label="Details"
        plain={true}
        fill
      />
      {show && (
        <Box>
          {place.place.location && (
            <Box>
              <Anchor label="On Google Maps" icon={<Map size="18px" />} />
            </Box>
          )}

          {place.place.facebookLink && (
            <Box>
              <Anchor
                href={place.place.facebookLink}
                label="Facebook"
                icon={<Facebook size="18px" />}
              />
            </Box>
          )}

          {place.place.instagramLink && (
            <Box>
              <Anchor
                href={place.place.instagramLink}
                label="Instagram"
                icon={<Instagram size="18px" />}
              />
            </Box>
          )}

          {place.place.twitterLink && (
            <Box>
              <Anchor
                href={place.place.twitterLink}
                label="Twitter"
                icon={<Twitter size="18px" />}
              />
            </Box>
          )}

          {place.place.websiteLink && (
            <Box>
              <Anchor
                href={place.place.websiteLink}
                label="Website"
                icon={<Domain size="18px" />}
              />
            </Box>
          )}

          {place.place.phoneNumber && (
            <Box>
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

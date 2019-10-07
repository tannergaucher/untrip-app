import React from "react"
import {
  Box,
  Anchor,
  Heading,
  Accordion,
  AccordionPanel,
  Button,
} from "grommet"
import {
  Facebook,
  Instagram,
  Twitter,
  Domain,
  Phone,
  MapLocation,
} from "grommet-icons"

export default function DetailsAccordion({ place }) {
  return (
    <Accordion>
      <AccordionPanel
        label={
          <Heading
            color="black"
            level="4"
            margin={{ vertical: "medium", horizontal: "small" }}
          >
            Details
          </Heading>
        }
      >
        <Box margin="small">
          {place.place.location && (
            <Box margin={{ vertical: "small" }}>
              <Button
                icon={<MapLocation size="18px" color="black" />}
                plain={true}
                alignSelf="start"
                label={
                  <Heading level="5" margin="none">
                    View on map
                  </Heading>
                }
                onClick={() => {
                  console.log("display map and center place on map")
                }}
              />
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
      </AccordionPanel>
    </Accordion>
  )
}

import React from "react"
import { Box, Anchor, Heading, Accordion, AccordionPanel } from "grommet"
import { Facebook, Instagram, Twitter, Domain, Phone, Map } from "grommet-icons"

export default function DetailsAccordion({ place }) {
  return (
    <Accordion>
      <AccordionPanel
        label={
          <Heading color="black" level="4" margin={{ vertical: "medium" }}>
            Details
          </Heading>
        }
      >
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
      </AccordionPanel>
    </Accordion>
  )
}

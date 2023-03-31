import * as React from "react";
import {
  Button,
  ChakraProvider,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import tarte from "./assets/images/tarte.jpg";
import chef from "./assets/images/le-chef-2.jpg";
import gateau from "./assets/images/le-chef-1.jpg";
import gateau2 from "./assets/images/nos-patisseries.jpg";

import elle from "./assets/svg/logo-elle.svg";
import lemonde from "./assets/svg/logo-lemonde.svg";
import vogue from "./assets/svg/logo-vogue.svg";
import traveller from "./assets/svg/logo-cntraveler.svg";
import patisserie from "./assets/svg/logo-fou-patesserie.svg";

import map from "./assets/images/map.png";

import insta from "./assets/svg/instagram.svg";
import fb from "./assets/svg/facebook.svg";
import linkedin from "./assets/svg/linkedin.svg";
import Carousel from "./carouselle";

function App() {
  return (
    <ChakraProvider>
      <VStack w="100%" align="start" bg="#F5EFEA">
        <HStack w="100%" justify="center">
          <Image src={tarte} w="100px" />
          <Text fontWeight="500" fontSize="18px">
            Philippe Lugnac
          </Text>
          <Image src={tarte} w="100px" />
        </HStack>

        <HStack w="100%" justify="center" spacing="50px">
          <Text fontWeight="500" fontSize="18px">
            Le chef
          </Text>

          <Text fontWeight="500" fontSize="18px">
            Nos pâtisseries
          </Text>

          <Text fontWeight="500" fontSize="18px">
            Où nous trouver
          </Text>
          <Text fontWeight="500" fontSize="18px">
            Nous contacter
          </Text>
        </HStack>
        <Carousel />

        <VStack
          w="100%"
          align="start"
          bg="#F5EFEA"
          pl="146"
          pr="146"
          pt="100"
          pb="100"
        >
          <Wrap w="100%" spacing="20">
            <WrapItem minW="564px" flex="1">
              <VStack w="100%" align="start" bg="#F5EFEA" spacing="74px">
                <Text fontWeight="700" fontSize="56px">
                  Le chef
                </Text>
                <Text fontWeight="500" fontSize="22px">
                  Philippe Lugnac s’amuse autant à inventer qu’à réinventer,
                  faire briller le répertoire classique parisien, visiter de
                  nouvelles terres avec attention et donner de l’éclat aux
                  soirées festives qui se prolongent.
                </Text>
                <Image src={gateau} w="564px" />
              </VStack>
            </WrapItem>
            <WrapItem minW="564px" flex="1">
              <Image src={chef} w="564px" />
            </WrapItem>
          </Wrap>
        </VStack>

        <VStack
          w="100%"
          align="start"
          bg="white"
          pl="146"
          pr="146"
          pt="100"
          pb="100"
        >
          <Wrap w="100%">
            <WrapItem minW="710px" flex="1">
              <Image src={gateau2} w="100%" h="533px" />
            </WrapItem>
            <WrapItem minW="400px" flex="0.3">
              <VStack w="100%" align="start" spacing="50px">
                <Text fontWeight="700" fontSize="56px">
                  Nos pâtisseries
                </Text>
                <Text fontWeight="500" fontSize="22px">
                  Créations originales, grands classiques revisités, gâteaux de
                  voyage ou pour vos événements, découvrez le catalogue de nos
                  produits disponibles en boutique...
                </Text>
              </VStack>
            </WrapItem>
          </Wrap>
        </VStack>

        <VStack
          w="100%"
          align="start"
          bg="#F5EFEA"
          spacing="50"
          pl="146"
          pr="146"
          pt="100"
          pb="100"
        >
          <Text fontWeight="700" fontSize="56px">
            On parle de nous
          </Text>

          <Text fontWeight="500" fontSize="22px">
            Nos dernières parutions dans la presse et sur internet.
          </Text>

          <HStack w="100%" justify="start" spacing="32px">
            <Image src={elle} w="203.7px" />
            <Image src={lemonde} w="203.7px" />
            <Image src={vogue} w="203.7px" />
            <Image src={traveller} w="203.7px" />
            <Image src={patisserie} w="203.7px" />
          </HStack>
        </VStack>

        <VStack
          w="100%"
          align="start"
          bg="white"
          spacing="50"
          pl="146"
          pr="146"
          pt="100"
          pb="100"
        >
          <Text fontWeight="700" fontSize="56px">
            Où nous trouver ?
          </Text>
          <HStack w="100%" justify="start" spacing="20px">
            <Image src={map} w="564px" />

            <VStack w="100%" align="start" spacing="50px">
              <VStack w="100%" align="start" spacing="10px">
                <Text fontWeight="600" fontSize="38px">
                  Lugnac
                </Text>
                <Text fontWeight="500" fontSize="22px">
                  4 rue Censier, Paris 7
                </Text>
              </VStack>

              <VStack w="100%" align="start" spacing="10px">
                <Text fontWeight="600" fontSize="38px">
                  Aux Prés
                </Text>
                <Text fontWeight="500" fontSize="22px">
                  Boulevard de l’Hôpital, Paris 15
                </Text>
              </VStack>

              <VStack w="100%" align="start" spacing="10px">
                <Text fontWeight="600" fontSize="38px">
                  Le Chardenoux
                </Text>
                <Text fontWeight="500" fontSize="22px">
                  15 rue du Jura, Paris 11
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </VStack>

        <VStack
          w="100%"
          align="start"
          bg="#F5EFEA"
          spacing="50"
          pl="146"
          pr="146"
          pt="100"
          pb="100"
        >
          <Text fontWeight="700" fontSize="56px">
            Nous contacter
          </Text>
          <Wrap spacing="20">
            <WrapItem minW="564px" flex="0.5">
              <VStack w="100%" align="start" spacing="50px">
                <VStack w="100%" align="start" spacing="33px">
                  <Text fontWeight="500" fontSize="22px">
                    Pour toute réservation, nous vous invitions à contacter
                    directement le restaurant par téléphone.
                  </Text>
                  <Text fontWeight="500" fontSize="22px">
                    * champs obligatoires.
                  </Text>
                </VStack>

                <VStack w="100%" align="start" spacing="10px">
                  <Text fontWeight="500" fontSize="22px">
                    Adresse e-mail *
                  </Text>
                  <Input
                    w="564px"
                    h="60px"
                    bg="white"
                    border="1px solid #E5E5E5"
                    borderRadius="5px"
                  />
                </VStack>

                <VStack w="100%" align="start" spacing="10px">
                  <Text fontWeight="500" fontSize="22px">
                    Votre message *
                  </Text>
                  <Textarea
                    w="564px"
                    h="180px"
                    bg="white"
                    border="1px solid #E5E5E5"
                    borderRadius="5px"
                  />
                </VStack>
                <VStack w="100%" align="end" spacing="10px">
                  <Button
                    w="164px"
                    h="60px"
                    bg="black"
                    color="white"
                    borderRadius="5px"
                  >
                    Envoyer
                  </Button>
                </VStack>
              </VStack>
            </WrapItem>
            <WrapItem minW="564px" flex="1">
              <VStack w="100%" align="start" spacing="50px">
                <Text fontWeight="500" fontSize="22px">
                  Nos coordonnées
                </Text>
                <VStack w="100%" align="start" spacing="33px">
                  <Text fontWeight="500" fontSize="22px">
                    Siège Lugnac
                  </Text>
                  <Text fontWeight="500" fontSize="22px">
                    4 rue Censier, Paris 7
                  </Text>
                </VStack>
                <Text fontWeight="500" fontSize="22px">
                  +33 (0)1 42 56 11 26
                </Text>
              </VStack>
            </WrapItem>
          </Wrap>
        </VStack>

        <VStack
          w="100%"
          align="center"
          bg="white"
          pl="146"
          pr="146"
          pt="100"
          pb="100"
        >
          <Text fontWeight="700" fontSize="56px">
            Retrouvez-nous
          </Text>

          <HStack w="100%" justify="center" spacing="32px">
            <Image src={fb} w="66px" />
            <Image src={insta} w="66px" />
            <Image src={linkedin} w="66px" />
          </HStack>
        </VStack>
      </VStack>
    </ChakraProvider>
  );
}

export default App;

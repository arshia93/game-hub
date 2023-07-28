import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navigation from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`,
      }}
    >
      <GridItem area={"nav"}>
        <Navigation />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} >
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

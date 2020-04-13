import React from 'react';

//SEMANTIC-UI-REACT
import { Grid, GridColumn, GridRow, Header } from 'semantic-ui-react';

//COMPONENTS
import LayoutControl from '../../components/layout';
import PCBuilds from '../../components/cards/pc_builds';

const HomePage = () => {
    return (
        <LayoutControl color="black">
            <Grid.Column width={16}>
                <Grid centered>
                    <GridRow>
                        <GridColumn>
                            <Header>Latest Builds</Header>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn width={6}>

                        </GridColumn>
                        <GridColumn width={10} className="latestBuilds" textAlign="right">
                            <PCBuilds/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Grid.Column>
        </LayoutControl>
    );
}

export default HomePage;
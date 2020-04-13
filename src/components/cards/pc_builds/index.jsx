import React from 'react';

// COMPONENTS
import { Icon, Card, Image, Header, Grid, GridColumn, GridRow } from 'semantic-ui-react';

// IMG
import pc_build from '../../../img/pc_build1.jpg';

const PCBuilds = () => {
    const card_group = () => {
        const card_array = [
            {
                image: pc_build,
                code: "000000",
                username: "pcbuild1",
                total_price: "55000",
                name: "first_build",
                date_created: "Jan 20, 2020",
                no_of_comments: "5",
                no_of_like: "234"
            },
            {
                image: pc_build,
                code: "000001",
                username: "pcbuild2",
                total_price: "45000",
                name: "second_build",
                date_created: "Jan 21, 2020",
                no_of_comments: "6",
                no_of_like: "23"
            },
            {
                image: pc_build,
                code: "000003",
                username: "pcbuild3",
                total_price: "60000",
                name: "third_build",
                date_created: "Jan 23, 2020",
                no_of_comments: "3",
                no_of_like: "112"
            }
        ]
        return card_array;
    }

    return (
        <Card.Group centered>
            {card_group().map((key) => {
                return (
                    <Card className="cardName">
                        <Image src={key.image} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{key.name}</Card.Header>
                            <Card.Meta className="metaCard">{key.date_created}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <Grid>
                                <GridRow width={16}>
                                    <GridColumn>
                                        <a><Icon name='thumbs up'>{key.no_of_like}</Icon></a>
                                    </GridColumn>
                                    <GridColumn/>
                                    <GridColumn>
                                        <a><Icon name='comments'>{key.no_of_comments}</Icon></a>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Card.Content>
                    </Card>
                )
            })}
        </Card.Group>
    )
}

export default PCBuilds;
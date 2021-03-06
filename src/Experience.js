import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Divider,
    List,
    ListItemText,
    Typography, useMediaQuery, useTheme
} from "@mui/material";
import {BusinessCenter, School} from "@mui/icons-material";
import {
    Timeline,
    TimelineConnector, TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {useTranslation} from "react-i18next";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

function CreateCard(props){
    const [expanded, setExpanded] = React.useState(false);
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const list = props.content.list;

    return(
        <Card style={{minWidth:1, opacity: inView ? 1 : 0 }} component={motion.div} animate={ inView? { x:0} : ""} initial={props.left? {x:"-50%"} : {x:"50%"}} ref={ref}>
            <CardContent>
                <Typography variant="h4" >{props.content.h3}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{props.content.sub1}</Typography>
                <Typography variant="h5" color="primary">{props.content.h4}</Typography>
                <Typography variant="subtitle2">{props.content.sub2}</Typography>

            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button variant="contained" color="primary" onClick={handleExpandClick}
                >{expanded? t("experience.show_less"):t("experience.show_more")}</Button>

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body1">
                        <List>{}
                            <CreateCardList list={list}/>
                        </List>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

function CreateCardList(props){
    const items=[];
    for (let l of props.list){
        items.push(<ListItemText primary={l}/>)
        items.push(<Divider/>)
    }
    return(
        items
    )
}

export default function Experience (){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const { t } = useTranslation();

    return(
        <Box textAlign="center" id="Experience" m={3}>
            {matches?
                <Box display="flex">
                    <Box flexGrow={1}>
                        <Typography variant="h2" style={{ fontWeight: 400, textAlign:"center"}}>{<BusinessCenter/>}{t("experience.title_experience")}</Typography>

                    </Box>
                    <Box flexGrow={1}>
                        <Typography variant="h2" style={{fontWeight: 400, textAlign:"center"}}>{<School/>}{t("experience.title_education")}</Typography>

                    </Box>
                </Box>
                : <Typography variant="h2" style={{ fontWeight: 400, textAlign:"center"}}>{<School/>}{t("experience.title_journey")}</Typography>
            }

            <Timeline position={matches? "alternate" : "right"}>

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            {t("experience.london.date")}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.london.h3"),
                            sub1:t("experience.london.sub1"),
                            h4:t("experience.london.h4"),
                            sub2:t("experience.london.sub2"),
                            list:[
                                t("experience.london.list.l0"),
                                t("experience.london.list.l1"),
                                t("experience.london.list.l2"),
                                t("experience.london.list.l3"),
                            ]
                        }} left={false}
                        />
                    </TimelineContent>
                </TimelineItem>

                { matches===true &&
                <TimelineItem style={{ marginTop: -15}}>
                    <TimelineSeparator>

                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>}

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            {t("experience.lancaster.date")}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.lancaster.h3"),
                            sub1:t("experience.lancaster.sub1"),
                            h4:t("experience.lancaster.h4"),
                            sub2:t("experience.lancaster.sub2"),
                            list:[
                                t("experience.lancaster.list.l0"),
                                t("experience.lancaster.list.l1"),
                                t("experience.lancaster.list.l2"),
                                t("experience.lancaster.list.l3"),
                                t("experience.lancaster.list.l4"),
                                t("experience.lancaster.list.l5"),
                                t("experience.lancaster.list.l6"),
                                t("experience.lancaster.list.l7")
                            ]
                        }}
                            left={false}
                        />
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            {t("experience.devhoster.date")}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.devhoster.h3"),
                            sub1:t("experience.devhoster.sub1"),
                            h4:t("experience.devhoster.h4"),
                            sub2:t("experience.devhoster.sub2"),
                            list:[
                                t("experience.devhoster.list.l0"),
                                t("experience.devhoster.list.l1"),
                                t("experience.devhoster.list.l2"),
                                t("experience.devhoster.list.l3"),
                                t("experience.devhoster.list.l4")
                            ]
                        }} left={true}/>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            {t("experience.icls.date")}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.icls.h3"),
                            sub1:t("experience.icls.sub1"),
                            h4:t("experience.icls.h4"),
                            sub2:t("experience.icls.sub2"),
                            list:[
                                t("experience.icls.list.l0"),
                                t("experience.icls.list.l1"),
                                t("experience.icls.list.l2")
                                ]
                        }} left={false}/>
                    </TimelineContent>
                </TimelineItem>

                { matches===true &&
                <TimelineItem style={{ marginTop: -15 }}>
                    <TimelineSeparator>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    </TimelineContent>
                </TimelineItem>}

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            {t("experience.lyon3.date")}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.lyon3.h3"),
                            sub1:t("experience.lyon3.sub1"),
                            h4:t("experience.lyon3.h4"),
                            sub2:t("experience.lyon3.sub2"),
                            list:[
                                t("experience.lyon3.list.l0"),
                                t("experience.lyon3.list.l1"),
                                t("experience.lyon3.list.l2"),
                                t("experience.lyon3.list.l3"),
                                t("experience.lyon3.list.l4"),
                                t("experience.lyon3.list.l5"),
                                t("experience.lyon3.list.l6")
                            ]
                        }} left={false}/>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent style={ !matches? {maxWidth:"25%"} : {maxWidth:"100%"} }>
                        <Typography variant="body2" color="textSecondary">
                            {t("experience.oxygene.date")}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{textAlign:"center"}}>
                        <CreateCard content={{
                            h3:t("experience.oxygene.h3"),
                            sub1:t("experience.oxygene.sub1"),
                            h4:t("experience.oxygene.h4"),
                            sub2:t("experience.oxygene.sub2"),
                            list:[
                                t("experience.oxygene.list.l0"),
                                t("experience.oxygene.list.l1"),
                                t("experience.oxygene.list.l2"),
                                t("experience.oxygene.list.l3"),
                                t("experience.oxygene.list.l4"),
                            ]

                        }} left={true}/>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}

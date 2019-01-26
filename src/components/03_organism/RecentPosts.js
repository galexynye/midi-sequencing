import React, { Component } from 'react'
import styled from 'styled-components'
import { msTheme } from '../../styles/Theme'
import { PostCard } from '../02_molecule/PostCard'
import { FlexboxOrganism, WidthWrapper, ContentContainer } from '../00_utilities/Utilities'
/* Static Query component 
Will query the post recent posts and render them as cards by injecting the data into the PostCard Component
*/
const RecentPostsStyled = styled.div`
padding-bottom: 40px;
border-bottom: 2px solid lightgray;
h2{
    text-align: center;
        margin-bottom: 40px;
        font-size: 25px;
        color : ${msTheme.colors.textlight}      ;
        font-weight: 50;  
}
`
const PostData = {
    title: "Build a Studio",
    snippet: 'Lorem ipsum dolor siri molestiae natus fuga, facilis architecto adipisci ullam impedit quibusdam officiis quisq? Earum, esse? Eligendi.',
    learnOrBlog: 'Blog',
    date: 'January 1st 2019'
}
const PostData2 = {
    title: "Build a Studio From Nothing to Everything",
    snippet: 'Lorem ipsum dolor siri molestiae natus fuga, facilis architecto adipisci ullam impedit quibusdam officiis quisq? Earum, esse? Eligendi.',
    learnOrBlog: 'Learn',
    date: 'January 1st 2019'
}
const PostData3 = {
    title: "Build a Studio",
    snippet: 'Lorem ipsum dolor siri molestiae natus fuga, facilis architecto adipisci ullam impedit quibusdam officiis quisq? Earum, esse? Eligendi.',
    learnOrBlog: 'Learn',
    date: 'January 1st 2019'
}


export class RecentPosts extends Component {
    render() {

        return (
            <RecentPostsStyled>
                <ContentContainer>
                    <WidthWrapper width="1100px">


                        <h2 class="center marB40">Latest</h2>




                        <FlexboxOrganism justifyContent="space-between" >
                            <PostCard
                                learnOrBlog={PostData.learnOrBlog}
                                snippet={PostData.snippet}
                                date={PostData.date}
                                title={PostData.title}
                            />
                            <PostCard
                                learnOrBlog={PostData2.learnOrBlog}
                                snippet={PostData2.snippet}
                                date={PostData2.date}
                                title={PostData2.title}
                            />
                            <PostCard
                                learnOrBlog={PostData3.learnOrBlog}
                                snippet={PostData3.snippet}
                                date={PostData3.date}
                                title={PostData3.title}
                            />
                        </FlexboxOrganism>
                    </WidthWrapper>

                </ContentContainer>
            </RecentPostsStyled>
        )
    }
}

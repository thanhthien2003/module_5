import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Postlist() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [id, setId] = useState(0);

    const [list, setList] = useState(
        [
            {
                "id": 1,
                "title": "5 Best Crypto Performers During The 2022 Market Flop",
                "slug": "5-best-crypto-performers-during-the-2022-market-flop",
                "category": "Crypto News",
                "content": "The exuberant peaks of the crypto business in 2022 fell into an extended crypto winter and left many of the sector’s top companies belly up.The aftermath of the shutdown of several large cryptocurrency exchanges has made concerns about liquidity and solvency a big topic of conversation throughout the market. At the beginning of the year, the total market capitalization of all cryptocurrencies was estimated to be $2.2 trillion. By the end of 2022, this amount would fall below $800 billion. Therefore, this shows a great deal about the events of the period. As 2022 comes to a close, we take a quick look at the five best-performing cryptocurrencies of the year.",
                "updatedAt": "21 hours ago"
            },
            {
                "id": 2,
                "title": "Top crypto funding stories of 2022",
                "slug": "top-crypto-funding-stories-of-2022",
                "category": "New Year Special",
                "content": "2022 was a watershed year for crypto venture capital, as investors poured tens of billions of dollars into blockchain-focused startups despite the overwhelmingly bearish trend in asset prices. Is the VC-dominated crypto funding model good for the industry? Only time will tell. Cointelegraph Research is still in the process of tallying all the funding figures for the year, but 2022 easily outpaced all other years in terms of total capital raised and deals completed. VC inflows were above $14 billion in each of the first two quarters before receding to just under $5 billion in the third quarter — still an impressive tally given the industry-wide contagion sparked by the sudden collapses of Celsius, Three Arrows Capital, Genesis, BlockFi and FTX, among others. Against this backdrop, we’ve compiled a list of some of the biggest funding stories of 2022.",
                "updatedAt": "a day ago"
            },
            {
                "id": 3,
                "title": "2023 will see the death of play to earn gaming",
                "slug": "2023-will-see-the-death-of-play-to-earn-gaming",
                "category": " Opinion",
                "content": "An environment has been created in which the players are not all that interested in games themselves, which is a strange state of affairs for a gaming industry to find itself in. More and more of the players are, in reality, investors who want returns on investment. The current structure creates the wrong kind of incentives and this is one of the reasons why the system is not working as it should. I would argue that DeFi Kingdom​s​, which is one of the better-known play-to-earn blockchain games out there, has been screwing with its tokenomics relentlessly by creating perverse incentives. By now, generally speaking, the token market is in a downtrend and the speculative trading market is dead. An industry can survive for a certain amount of time on promise, expectation and unjustified hype. But, it can only do so for so long. Eventually, people begin to notice that they haven’t received what they have been promised. Patience starts to wear thin. They get angry, they get frustrated and they begin to withdraw. This begins as a trickle of the savviest players, but that can soon become a flood.",
                "updatedAt": "a day ago"
            },
            {
                "id": 4,
                "title": "US lawmakers under pressure following FTX collapse: Report",
                "slug": "us-lawmakers-under-pressure-following-ftx-collapse-report",
                "category": " News",
                "content": "Legislators in the United States seem to be reevaluating the crypto industry and its regulatory needs in light of FTX’s collapse. According to the Wall Street Journal, since the crypto exchange filed for bankruptcy in November, lawmakers have been under pressure to set a new regulatory framework for cryptocurrencies. Several proposals are in the works that would apply existing banking, securities and tax rules to cryptocurrencies, and lawmakers are calling on the Securities and Exchange Commission (SEC) to adopt an aggressive approach to the crypto market. In a December House hearing, Rep. Jake Auchincloss, who is also a member of the bipartisan Congressional Blockchain Caucus, reportedly noted that “it’s time for the blockchain investors and entrepreneurs to build things that matter or to lose more credibility,” adding that in 14 years crypto has only delivered “white papers and podcasts.”",
                "updatedAt": "2 days ago"
            },
            {
                "id": 5,
                "title": "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
                "slug": "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
                "category": "Interviews",
                "content": "2022 is coming to an end, and our staff at Bitcoinist decided to launch this Crypto Holiday Special to provide some perspective on the crypto industry. We will talk with multiple guests to understand this year’s highs and lows for crypto. In the spirit of Charles Dicken’s classic, “A Christmas Carol,” we’ll look into crypto from different angles, look at its possible trajectory for 2023 and find common ground amongst these different views of an industry that might support the future of finances. Over the last week, we spoke with institutions about their perception of 2022 and their outlook for the coming months. We’ll begin our experts round with Material Indicators, a market data, and analytics firm dedicated to building trading tools for the nascent sector.",
                "updatedAt": "2 days ago"
            }
        ])

    const handleInputTitle = (title) => {
        setTitle(title);
    }

    const handleInputCategory = (category) => {
        setCategory(category);
    }

    const handleInputContent = (content) => {
        setContent(content);
    }

    const getPost = (id) => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                setTitle(list[i].title);
                setCategory(list[i].category);
                setContent(list[i].content);
                setId(id);
                break
            }
        }
    }

    const createPost = () => {
        if (title === "" || category === "" || content === "") {
            alert("you have to input all record");
            return;
        }
        const date = new Date();
        const newPost = {
            "id": Math.floor(Math.random() * 100) + 1,
            "title": title,
            "slug": title.replace(" ", "-").toLowerCase(),
            "category": category,
            "content": content,
            "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }
        const newArray = [...list,newPost];
        setList(newArray);
        setTitle("");
        setCategory("");
        setContent("");
    }

    const deletePost = (id) => {
        const newList = [...list];
        for (let i = 0;i<newList.length;i++) {
            if(id===newList[i].id){
                newList.splice(i,1);
                break;
            }
        }
        setList(newList);
    }

    const editPost = () => {
        if (id === 0) {
            alert("you did not choose anything ! ")
            return;
        }
        if (title === "" || category === "" || content === "") {
            alert("you have to input all record");
            return;
        }
        const date = new Date();
        const newPost = {
            "id": id,
            "title": title,
            "slug": title.replace(" ", "-").toLowerCase(),
            "category": category,
            "content": content,
            "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
        }
        const newList = [...list];
        let flag = false;
        for (let i = 0; i < newList.length; i++) {
            if (newList[i].id === id) {
                newList[i] = {
                    "id": id,
                    "title": title,
                    "slug": title.replace(" ", "-").toLowerCase(),
                    "category": category,
                    "content": content,
                    "updatedAt": date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                };
                flag = true;
                setId(-1);
            }
        }
        if (flag) {
            setList(newList);
        } else {
            alert("can't find post");
        }
        setTitle("");
        setCategory("");
        setContent("");
    }

    return (
        <div>
            <table className="post-list table table-striped ">
                <tr>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>CATEGORY</td>
                    <td>TIME</td>
                    <td>ACTIONS</td>
                </tr>
                {list.map((post, index) => {
                    return (
                        <tr key={post.id}>
                            <td>{index + 1}</td>
                            <td>{post.title}</td>
                            <td>{post.category}</td>
                            <td>{post.updatedAt}</td>
                            <td>
                                <button className='edit-post btn btn-primary' onClick={() => getPost(post.id)} >Edit</button>
                                <button className='delete-post btn btn-danger' onClick={() => deletePost(post.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
            <div>
                <div>
                    <label htmlFor='title'>Input title</label>
                    <br />
                    <input id="title" name="title" value={title} onChange={(event) => handleInputTitle(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='category'>Input category</label>
                    <br />
                    <input id="category" name="category" value={category} onChange={(event) => handleInputCategory(event.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='content'>Input content</label>
                    <br />
                    <input id="content" name="content" value={content} onChange={(event) => handleInputContent(event.target.value)}></input>
                </div>
                <button className="btn btn-primary" onClick={() => createPost()}>Add</button>
                <button className="btn btn-primary" onClick={() => editPost()}>Edit</button>
            </div>
        </div>
    );
}
export default Postlist;
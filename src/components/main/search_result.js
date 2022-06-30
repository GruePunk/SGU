import "../../assets/styles/basic_styles.css"
import {useEffect, useState} from "react";

function search_result(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [State, Setstate] = useState({
        isLoaded: false,
        error: false,
        items: [],
        repos: []
    })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        Promise.all([
            fetch(`https://api.github.com/users/${props.name}`),
            fetch(`https://api.github.com/users/${props.name}/repos`)
        ])
            .then(async res => {
                const res_ok = (await res[0].ok === await res[1].ok);
                console.log(res_ok)
                return [
                    await res[0].json(),
                    await res[1].json(),
                    res_ok]
            })
            .then(data => {
                    Setstate({
                        isLoaded: true,
                        error: data[data.length - 1],
                        items: data[0],
                        repos: data[1]
                    })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.name])
    const {error, isLoaded, items, repos} = State;


    if (!isLoaded) {
        return (
            <div className="result_search">
                <h1>Loading...</h1>
            </div>
        )}else if (!error) {
        return (
            <div className="result_search">
                <h1>User not Found</h1>
            </div>
        )}else {
        return (
            <div className="result_search">
                <div className="result_search-top">
                    <div className="profile_info_lowgeneral">
                        <img id="profile_img" src={items.avatar_url} alt="img"/>
                        <h4 id="profile_followers">Followers: {items.followers}</h4>
                        <h4 id="profile_location">Locate: {items.location}</h4>
                        <h4 id="profile_blog">Blog: <a href={items.blog}>{items.blog}</a></h4>
                        <h4 id="profile_bio">Bio: {items.bio}</h4>
                    </div>
                    <div className="profile_info_general">
                        <h3 id="profile_name">Name: {items.name}</h3>
                        <h3 id="profile_id">Id: {items.id}</h3>
                        <h3 id="profile_type">Type: {items.type}</h3>
                        <h3 id="profile_url">Url: <a href={items.html_url}>{items.html_url}</a></h3>
                        {/* eslint-disable-next-line*/}
                        <h3 id="profile_created">Created: {items.created_at.replace(/\T.*/, '')}</h3>
                        {/* eslint-disable-next-line*/}
                        <h3 id="profile_updated">Updated: {items.updated_at.replace(/\T.*/, '')}</h3>
                    </div>
                </div>
                <h3 id="profile_repos">Repos: {items.public_repos}</h3>
                    <div className="profile_info_repos">
                        <ol>
                        {repos.length !== 0 && repos.map((rep) => <li>
                            <b><a href={rep.html_url}>Link</a> {rep.name} ({rep.visibility})</b>
                            {/* eslint-disable-next-line*/}
                            <p className="element-repos-list">upd: [{rep.updated_at.replace(/\T.*/, '')}]</p>
                            <p className="element-repos-list">language: [{rep.language}]</p>
                            </li>)}
                        </ol>
                    </div>

            </div>
        )
    }
}

export default search_result
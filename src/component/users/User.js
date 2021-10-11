import React, { useEffect, Fragment, useContext } from 'react'
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';



const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserRepos, repos } = githubContext;
  useEffect( () => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = user;

    if( loading ) return <Spinner />
    return (
      <Fragment>
        <Link to='/' className="btn btn-light">
          Back To Search
        </Link>
        Hireable: {' '}
        { hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-time-circle text-danger' /> }
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt=" " className='round-img' style={{width: '150px'}} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
            
            <ul>
              <li>
                {login && <Fragment>
                  <p><strong>Login: </strong>{login}</p>
                </Fragment>}
              </li>
              <li>
                {company && <Fragment>
                  <p><strong>Company: </strong>{company}</p>
                </Fragment>}
              </li>
              <li>
                {blog && <Fragment>
                  <p><strong>Website: </strong>{blog}</p>
                </Fragment>}
              </li>
            </ul>
          </div>
          </div>
          <div className="card text-center">
            <div className='badge badge-primary'>Following: {following}</div>
            <div className='badge badge-success'>Followers: {followers}</div>
            <div className='badge badge-light'>Public Repos: {public_repos}</div>
            <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
      
    )
}

User.propTypes = {
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

export default User

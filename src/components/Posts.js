import React from 'react'

export default function Posts() {


    return (
        <div className="content-list">
            <DateDivider date={'January 5 2022'}/>
            <Post
                name='Ada'
                timestamp='one week ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post name='Leon' timestamp='one week ago' text={`Lorem ipsum dolor. `} />
            <Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />
            <Post
                name='Ellie'
                timestamp='4 days ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
            />
            <Post
                name='Chris'
                timestamp='4 days ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post
                name='Claire'
                timestamp='2 days ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
            />
            <Post
                name='Albert'
                timestamp='22 hours ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
            />
            <Post
                name='Rebecca'
                timestamp='3 hours ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.`}
            />
            <Post
                name='H.U.N.K'
                timestamp='Just now'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post
                name='Ada'
                timestamp='one week ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post name='Leon' timestamp='one week ago' text={`Lorem ipsum dolor. `} />
            <Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />
            <Post
                name='Ellie'
                timestamp='4 days ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
            />
            <Post
                name='Chris'
                timestamp='4 days ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.`}
            />
            <Post
                name='Claire'
                timestamp='2 days ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
            />
            <Post
                name='Albert'
                timestamp='22 hours ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
            />
            <Post
                name='Rebecca'
                timestamp='3 hours ago'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.`}
            />
            <Post
                name='H.U.N.K'
                timestamp='Just now'
                text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit.`}
            />
        </div>
    )
}

const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random() * 100);
    return (
        <div className={'post'}>
            <div className="avatar-wrapper">
                <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='Avatar' className='avatar'/>
            </div>

            <div className='post-content'>
                <p className='post-owner'>
                    {name}
                    <small className='timestamp'>{timestamp}</small>
                </p>
                <p className='post-text'>{text}</p>
            </div>
        </div>
    );
};

const DateDivider = (props) => {
    return (
        <div className='flex flex-row items-center justify-evenly'>
            <hr className="posts-hr ml-2"/>
            <p className='text-gray-500 text-xs'>{props.date}</p>
            <hr className="posts-hr mr-2"/>
        </div>
    )
  }


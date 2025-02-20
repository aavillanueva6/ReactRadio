'use client';

import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_BOARD_MEMBER } from '@/app/lib/queries';
import { useParams } from 'next/navigation';

interface BoardMemberType {
  Title: string;
  bio: string[];
  firstName: string;
  image: string;
  lastName: string;
  nickName: string;
}

const textOutline: Record<string, string> = {
  color: '#fff',
  textShadow: `1px 1px 0 #000,
    -1px 1px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000`,
};

// @ts-ignore
const SingleBoardMemberPageClient: React.FC = () => {
  const { bmUrl } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_BOARD_MEMBER, {
    variables: { url: bmUrl },
  });
  const boardMember: BoardMemberType = data?.singleBM || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='row row-cols-1 row-cols-lg-3 justify-content-center g-4 pt-5 bg-secondary'>
        <div className='d-flex col justify-content-center'>
          <img
            className='bd-placeholder-img rounded-circle card card-cover  overflow-hidden text-bg-dark rounded-4 shadow-lg'
            width='400'
            src={boardMember.image}
            aria-label='Placeholder'
          />
        </div>
      </div>
      <div className='row row-cols-1 row-cols-lg-2 justify-content-center g-4 py-0 bg-secondary'>
        <div className='d-flex flex-column h-100 pb-5 pt-0  text-white text-shadow-1'>
          <h3
            className='pt-0 mt-0 mb-0 display-5 lh-1 fw-bold'
            style={textOutline}
          >
            {boardMember.firstName} {boardMember.lastName}
          </h3>
          <h4 className='pt-0 mt-0 mb-4 display-6 lh-1' style={textOutline}>
            {boardMember.nickName ? (
              <>
                {boardMember.nickName} - {boardMember.Title}
              </>
            ) : (
              <>{boardMember.Title}</>
            )}
          </h4>
          {boardMember.bio &&
            boardMember.bio.map((paragraph: string, i: number) => {
              return <p key={i}>{paragraph}</p>;
            })}
        </div>
      </div>
    </>
  );
};

export default SingleBoardMemberPageClient;

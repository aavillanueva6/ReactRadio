'use client';

import { useQuery } from '@apollo/client';
import { QUERY_BOARD } from '@/app/lib/queries';
import BMCard from '@/app/components/BMCard';
import PHDJCard from '@/app/components/PHDJCard';

interface BoardMemberType {
  Title: string;
  firstName: string;
  fullName: string;
  image: string;
  lastName: string;
  nickName: string;
  sqImage: string;
  url: string;
  _id: string;
  shortBio: string;
}

const BoardPageClient: React.FC = () => {
  const { loading, data } = useQuery(QUERY_BOARD);
  let boardMembers: BoardMemberType[] = data?.boardMembers || [];

  const phDJs: number[] = [0, 1, 2, 3, 4, 5, 6];
  return (
    <>
      {loading
        ? phDJs.map((e: number) => (
            <PHDJCard aria-hidden='true' key={`placeholder-dj-card-${e}`} />
          ))
        : boardMembers.map((member: BoardMemberType) => (
            <BMCard key={member._id} bm={member} />
          ))}
    </>
  );
};

export default BoardPageClient;

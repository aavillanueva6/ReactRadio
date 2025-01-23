import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs, resolvers } from '@/app/api/graphql/schemas/index';
import { NextRequest } from 'next/server';
import mongoose from 'mongoose';

const uri =
  process.env.NEXT_PUBLIC_MONGODB_URI ||
  'mongodb://127.0.0.1:27017/WETF-Local-dev';

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log('🎉 connected to database successfully');
    }
  } catch (error) {
    console.error(error);
  }
};
connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
  }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}

export async function connectToDB() {
  const dbConnection = await mongoose.connect(uri);
  return dbConnection.connection;
}

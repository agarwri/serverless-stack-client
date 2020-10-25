export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HXzPfEng2kidofDvWYJvk8K392CsBOTmlCXIsogYMxU2AA7ILJsfp04FBarYvlh4HcV9GRkA2aROjAE9ajxnPTi008h6f3M8t",
  s3: {
    REGION: "us-east-1",
    BUCKET: "ritika-scratch-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://hhi1x29ps7.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_dgfzxDCus",
    APP_CLIENT_ID: "6simd958n8376dmt7cmdct01is",
    IDENTITY_POOL_ID: "us-east-2:374a0a05-9f22-4326-8fac-64d3cedbd8f4"
  }

};

const dev = {
  STRIPE_KEY: "pk_test_51HXzPfEng2kidofDvWYJvk8K392CsBOTmlCXIsogYMxU2AA7ILJsfp04FBarYvlh4HcV9GRkA2aROjAE9ajxnPTi008h6f3M8t",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-ceys8cnqhqc"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://oduf7pfsu1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Utd19tkeo",
    APP_CLIENT_ID: "7bdqkuaacgh6pln1uq19h68ue3",
    IDENTITY_POOL_ID: "us-east-1:16a8121b-cae6-4a75-8583-0d9ffcf4bdb2"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HXzPfEng2kidofDvWYJvk8K392CsBOTmlCXIsogYMxU2AA7ILJsfp04FBarYvlh4HcV9GRkA2aROjAE9ajxnPTi008h6f3M8t",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-c1xb37wog5i3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://uyq4hm1t4l.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_LDFvNcHiC",
    APP_CLIENT_ID: "u9miv4hde63rph49gn49t19r4",
    IDENTITY_POOL_ID: "us-east-1:57661e6d-caa1-4737-adbe-f40b51c0b99f"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;

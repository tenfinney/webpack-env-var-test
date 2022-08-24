declare global {
    namespace NodeJS {
      interface ProcessEnv {
        VITE_TEST_VAR: string;
      }
    }
  }
  
  export {}
interface IHostEnv {
    API_KEY: string;
    MAIN_ROUTE: string;
  }
  
  export class Config {
    public static init(env: IHostEnv) {
      this.API_KEY = env.API_KEY;
      this.MAIN_ROUTE = env.MAIN_ROUTE;
    }
  
    public static API_KEY: string;

    public static MAIN_ROUTE: string;
    
    public static get KEY() {
      return this.API_KEY;
    }

  
    public static get MAIN_ENDPOINT() {
      return `${this.MAIN_ROUTE}`;
    };

  }
  
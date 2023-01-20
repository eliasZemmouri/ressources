//import { ProviderWrapper as CountersProviderWrapper } from "contexts/CountersContext";
import { ProviderWrapper as CountersProviderWrapper } from "contexts/CountersContext";
import App from "components/App/App";


const AppLoader= () => {
  return (
    <CountersProviderWrapper  >
        <App/>
      </CountersProviderWrapper  >
  )
}

export default AppLoader;

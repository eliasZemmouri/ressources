import { ProviderWrapper as ContextButton } from "Contexts/myContext";
import App from "Components/App/App.js";

const AppLoader= () => {
  return (
    <ContextButton >
        <App/>
    </ContextButton >
  )
}

export default AppLoader;
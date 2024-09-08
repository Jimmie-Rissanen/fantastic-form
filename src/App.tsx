import { Form } from "./pages/Form";
import { FormDataProvider } from "./providers";

function App() {
  return (
    <FormDataProvider>
      <Form />
    </FormDataProvider>
  );
}

export default App;

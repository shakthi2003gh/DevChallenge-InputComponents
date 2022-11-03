import Input from "./components/inputs";

function App() {
  return (
    <>
      <h1>Inputs</h1>

      <div className="input-components">
        <div className="group">
          <div className="section">
            <div className="heading">{"<Input />"}</div>
            <Input />
          </div>

          <div className="section hover">
            <div className="sub-heading">{"&:hover"}</div>
            <Input />
          </div>

          <div className="section focus">
            <div className="sub-heading">{"&:focus"}</div>
            <Input />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">{"<Input error />"}</div>
            <Input error />
          </div>

          <div className="section hover">
            <div className="sub-heading">{"&:hover"}</div>
            <Input error />
          </div>

          <div className="section focus">
            <div className="sub-heading">{"&:focus"}</div>
            <Input error />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">{"<Input disabled />"}</div>
            <Input disabled />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">
              {'<Input helperText="Some interesting text" />'}
            </div>
            <Input helperText="Some interesting text" />
          </div>

          <div className="section">
            <div className="heading">
              {'<Input helperText="Some interesting text" error />'}
            </div>
            <Input helperText="Some interesting text" error />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">{"<Input startIcon />"}</div>
            <Input startIcon />
          </div>

          <div className="section">
            <div className="heading">{"<Input endIcon />"}</div>
            <Input endIcon />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">{'<Input value="text" />'}</div>
            <Input value="text" />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">{'<Input size="sm" />'}</div>
            <Input size="sm" />
          </div>

          <div className="section">
            <div className="heading">{'<Input size="md" />'}</div>
            <Input size="md" />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">{"<Input fullWidth />"}</div>
            <Input fullWidth />
          </div>
        </div>

        <div className="group">
          <div className="section">
            <div className="heading">{'<Input multiline row="4" />'}</div>
            <Input multiline row="4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

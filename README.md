# Getting Started with Create React App
### Util scripts
- create project
    ```sh
    npx create-react-app my-app
    ```
    with typescript template
    ```sh
    npx create-react-app my-app --template typescript
    ```
- start
    ```sh
    cd <project directory>
    npm run start
    ```
- build project
### How to create a react component
- Functional Components (Pure function)
    ```javascript
    const Democomponent=()=>
    {
        return <h1>Welcome Message!</h1>;
    }
    ```
- Class Components
    ```javascript
    class Democomponent extends React.Component
        {
            constructor(props) {
                super(props);
                this.state = {count: 1};
            }
            render(){
                return <h1>Welcome Message!</h1>;
            }
        }
    ```
- Diff and should choose `Functional` or `Class` component
[Refer it](https://djoech.medium.com/functional-vs-class-components-in-react-231e3fbd7108#:~:text=The%20most%20obvious%20one%20difference,which%20returns%20a%20React%20element.) for brief comparation.
### How to sharing data between component
Refer: https://www.pluralsight.com/guides/react-communicating-between-components
- From parent to child with `props`
- From child to parent with callbacks
  it is as same as EventEmit in angular
- From parent tof child with `context`
- Sideways with non-react options
### Styles
### Hook
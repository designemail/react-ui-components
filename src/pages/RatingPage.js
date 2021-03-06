import React, { useState } from 'react';
import { Rating, Switch, InputField, Select, Icon, ThemeContext, Divider } from '../components';
import Page from '../layouts/Page';

const rows = [
    { 
        property: 'rate', 
        description: 'Pass current rate',
        default: '', 
        type: 'number',
        value: ''
    },
    { 
        property: 'count', 
        description: 'Set rate scale',
        default: '5', 
        type: 'number',
        value: ''
    },
    { 
        property: 'disabled', 
        description: 'Make rating component disabled',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'onChange', 
        description: 'Invokes on rate changes (return rated value)',
        default: '', 
        type: 'function',
        value: ''
    },
    { 
        property: 'size', 
        description: 'Set stars size',
        default: '24px', 
        type: 'number',
        value: ''
    },
    { 
        property: 'color',
        description: 'Set stars color', 
        default: 'yellow', 
        type: 'string',
        value: 'yellow | primary | info | success | error'
    },
    { 
        property: 'hideRate', 
        description: 'Hide rate digits',
        default: 'false', 
        type: 'boolean',
        value: 'true | false'
    },
    { 
        property: 'text',
        description: 'Set text', 
        default: '', 
        type: 'string',
        value: ''
    },
    { 
        property: 'className',
        description: 'Set a custom css class to component', 
        default: '', 
        type: 'string',
        value: ''
    }
]
const colors = ['yellow', 'primary', 'info', 'success', 'error'];

const usage =
`// Usage examples
import React, { useState } from 'react';
import { Rating } from '@assenti/rui-components';

function Example() {
    const [count, setCount] = useState(5);
    const [rate, setRate] = useState(3.5);

    return (
        <>
            <Rating
                className="pa-10"
                text="Your Rate"
                rate={rate}
                color="primary"
                onChange={(rated) => {
                    console.log(rated)
                    setRate(rated)
                }}
                count={count}/>
        </>
    )
}`

const RatingPage = () => {
    const [disabled, setDisabled] = useState(false);
    const [count, setCount] = useState(5);
    const [rate, setRate] = useState(3.5);
    const [color, setColor] = useState(colors[0]);
    const [hide, setHide] = useState(false);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <Page
                    usage={usage}
                    apiDescItems={rows}
                    componentName="<Rating/>">
                    <InputField
                        style={{ width: 100 }} 
                        value={count}
                        type="number"
                        min={0}
                        dark={theme}
                        label="Rating scale"
                        placeholder="Define stars count" 
                        onChange={e => setCount(e.target.value)}/>
                    <br/>
                    <br/>
                    <InputField
                        style={{ width: 100 }} 
                        value={rate}
                        type="number"
                        min={0}
                        dark={theme}
                        label="Current rate"
                        placeholder="Define rate" 
                        onChange={e => setRate(e.target.value)}/>
                    <br/>
                    <br/>
                    <Select
                        items={colors}
                        prefix={<Icon name="brush"/>}
                        width={200}
                        dark={theme}
                        label="Color theme"
                        color="primary"
                        value={color}
                        onChange={v => setColor(v)}/>
                    <br/>
                    <br/>
                    <Switch 
                        color="primary" 
                        check={disabled}
                        className="my-10"
                        rightLabel="Disabled"
                        onChange={() => setDisabled(!disabled)}/>
                    <Switch 
                        color="primary" 
                        check={hide}
                        className="my-10"
                        rightLabel="Hide rate"
                        onChange={() => setHide(!hide)}/>
                    <Divider/>
                    <Rating
                        className="pa-10"
                        text="Your Rate"
                        hideRate={hide}
                        rate={rate}
                        color={color}
                        onChange={(rated) => {
                            console.log(rated)
                            setRate(rated)
                        }}
                        disabled={disabled} 
                        count={count}/>
                </Page>
            )}
        </ThemeContext.Consumer>
    )
}
export default RatingPage;
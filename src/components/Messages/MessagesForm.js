import React, { Component } from 'react'
import { Segment, Button, Input } from 'semantic-ui-react';



export default class MessagesForm extends Component {
    render() {
        return (
            <Segment className='message__form' >
                <Input  fluid name='message' style={{marginBottom:'.7em'}} 
                label={<Button icon={'add'} /> }
                labelPosition='left'
                placeholder='Write your message'
                />

                <Button.Group icon widths='2'>
                    <Button 
                    color='blue'
                    content='Add Reply'
                    labelPosition='left'
                    icon='edit'
                    />
                    <Button 
                    color='teal'
                    content='Upload Media'
                    labelPosition='right'
                    icon='cloud upload'
                    />

                </Button.Group>

            </Segment>
        )
    }
}

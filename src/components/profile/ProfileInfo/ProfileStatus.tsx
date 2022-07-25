import axios from "axios";
import React, { ChangeEvent } from "react"
import { updateStatusTC } from '../../../redux/profile-reducer';

type ProfileStatusType = {
    status: string
}
export class ProfileStatus extends React.Component<ProfileStatusType>  {

    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        updateStatusTC('NOOOOOOOOOOOO')


    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidMount() {
/*         axios
            .put(`https://social-network.samuraijs.com/api/1.0/profile/status/`, { status: 'n000' })
            .then(response => this.setState({sat: response.data})) */

/*         axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/status/24600`)
            .then(response => this.setState({ status: response.data })) */
    }
    componentDidUpdate = (prevProps: any, prevState: any) => {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }

    }
    render() {
        return (
            <div>

                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode.bind(this)}>
                        <h3>{this.props.status + '1' || 'NaN'}</h3>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus
                            onChange={this.onStatusChange}
                            onBlur={this.deActivateEditMode}
                            value={this.props.status} />
                    </div>}
            </div>
        )
    }
}

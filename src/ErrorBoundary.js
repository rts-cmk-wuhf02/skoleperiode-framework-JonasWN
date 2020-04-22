import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        // eslint-disable-next-line
        console.error('ErrorBoundary caught an error', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>
                    there was an error with this listing. <Link to="/">
                        Click Here to return to the home pages
                    </Link>
                </h1>
            )
        }
        return this.props.children
    }
}

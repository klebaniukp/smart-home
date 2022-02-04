import React from 'react';
import { ActiveStatusButton } from '../../atoms/Buttons/ActiveStatusButton';
import { PoorConnectionStatusButton } from '../../atoms/Buttons/PoorConnectionStatusButton';
import { DisconnectedStatusButton } from '../../atoms/Buttons/DisconnectedStatusButton';

export const StatusButton = (props: {
    type: 'connected' | 'disconnected' | 'poorConnection';
}) => {
    switch (props.type) {
        case 'connected':
            return <ActiveStatusButton value={'active'} />;
        case 'disconnected':
            return <DisconnectedStatusButton value={'disconnected'} />;
        case 'poorConnection':
            return <PoorConnectionStatusButton value={'bad_connection'} />;
        default:
            return null;
    }
};

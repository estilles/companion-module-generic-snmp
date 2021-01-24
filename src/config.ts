import { SomeCompanionConfigField } from '../../../instance_skel_types';

export interface DeviceConfig {
	ip?: string
}

export function GetConfigFields(REGEX_IP: string): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'ip',
			label: 'HOOBS Host IP Address',
			width: 6,
			regex: REGEX_IP,
			default: '192.168.1.1',
		},
	]
}

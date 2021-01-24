import InstanceSkel from '../../../instance_skel';
import { CompanionConfigField, CompanionSystem } from '../../../instance_skel_types';

import { DeviceConfig, GetConfigFields } from './config';

export default class ControllerInstance extends InstanceSkel<DeviceConfig> {

    constructor(system: CompanionSystem, id: string, config: DeviceConfig) {
        super(system, id, config);

        this.system = system;
        this.config = config;
    }

    init(): void {
        // TODO
    }

    updateConfig(config: DeviceConfig): void {
        this.config = config;
    }

    config_fields(): CompanionConfigField[] {
        return GetConfigFields(this.REGEX_IP)
    }

    destroy(): void {
        // TODO
    }

}

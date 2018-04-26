import {Task} from '../Task';

export type pickupTargetType = Resource;
export const pickupTaskName = 'pickup';

export class TaskPickup extends Task {
	target: pickupTargetType;

	constructor(target: pickupTargetType, options = {} as TaskOptions) {
		super('pickup', target, options);
	}

	isValidTask() {
		return this.creep.carry.energy < this.creep.carryCapacity;
	}

	isValidTarget() {
		return this.target && this.target.amount > 0;
	}

	work() {
		// let res =
		// if (!this.target) { // if the target is gone, we're done and clear the task
		// 	this.finish();
		// }
		return this.creep.pickup(this.target);
	}
}

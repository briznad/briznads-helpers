import { describe, it, expect, beforeEach, vi } from 'vitest';

import { default as sleep } from './sleep.js';


describe('sleep', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	it('should resolve after the specified time', async () => {
		const promise = sleep(1000);
		vi.advanceTimersByTime(1000);
		await expect(promise).resolves.toBeUndefined();
	});

	it('should not resolve before the specified time', async () => {
		const promise = sleep(1000);
		vi.advanceTimersByTime(500);

		let resolved = false;
		promise.then(() => { resolved = true; });

		await vi.runAllTimersAsync();
		expect(resolved).toBe(true);
	});
});

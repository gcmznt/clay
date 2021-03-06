/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon, {ClayIconSpriteContext} from '..';
import * as TestRenderer from 'react-test-renderer';
import React from 'react';

describe('ClayIcon', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayIcon
				spritemap="/path/to/some/resource.svg"
				symbol="cool-icon"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with context spritemap', () => {
		const testRenderer = TestRenderer.create(
			<ClayIconSpriteContext.Provider value="foo/bar.svg">
				<ClayIcon symbol="cool-icon" />
			</ClayIconSpriteContext.Provider>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

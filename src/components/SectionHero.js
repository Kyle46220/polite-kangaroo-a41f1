import React from 'react';
import _ from 'lodash';
import Video from './Video';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

import BackgroundVideo from './BackgroundVideo';
// const videoPoster = '../static/images/1.jpg';
// const videoTitle = 'HelloTitle';
// const video = '../static/images/ManDraw.mp4';

export default class SectionHero extends React.Component {
	render() {
		let section = _.get(this.props, 'section', null);
		return (
			<section
				id={_.get(section, 'section_id', null)}
				className="block hero-block bg-accent outer"
			>
				{console.log(this)}
				<BackgroundVideo
					poster={_.get(section, 'videoPoster', null)}
					videoTitle={_.get(section, 'videoPoster', null)}
				>
					{_.get(section, 'video', null) && (
						<source
							src={_.get(section, 'video', null)}
							type="video/mp4"
						/>
					)}
				</BackgroundVideo>
				<div className="inner">
					<div className="grid">
						{_.get(section, 'image', null) && (
							<div className="cell block-preview">
								<img
									src={withPrefix(
										_.get(section, 'image', null)
									)}
									alt={_.get(section, 'image_alt', null)}
								/>
							</div>
						)}
						<div className="cell block-content">
							{_.get(section, 'title', null) && (
								<h2 className="block-title underline">
									{_.get(section, 'title', null)}
								</h2>
							)}
							<div className="block-copy">
								{markdownify(_.get(section, 'content', null))}
							</div>
							{_.get(section, 'actions', null) && (
								<div className="block-buttons">
									<CtaButtons
										{...this.props}
										actions={_.get(
											section,
											'actions',
											null
										)}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		);
	}
}

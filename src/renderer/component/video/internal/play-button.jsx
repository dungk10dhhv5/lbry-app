
import React from 'react';
import Link from 'component/link';

type Props = {
  play: string => void,
  isLoading: boolean,
  uri: string,
  mediaType: string,
  fileInfo: ?{},
};

class VideoPlayButton extends React.PureComponent<Props> {
  constructor() {
    super();
    (this: any).keyDownListener = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownListener);
  }

  onKeyDown(event: SyntheticKeyboardEvent<*>) {
    if (event.target.tagName.toLowerCase() !== 'input' && event.code === 'Space') {
      event.preventDefault();
      this.watch();
    }
  }

  watch() {
    this.props.play(this.props.uri);
  }

  render() {
    const { isLoading, fileInfo, mediaType } = this.props;

    /*
      TODO: Add title back to button
       title={
       isLoading ? "Video is Loading" :
       !costInfo ? "Waiting on cost info..." :
       fileInfo === undefined ? "Waiting on file info..." : ""
       }
     */

    const disabled = isLoading || fileInfo === undefined;
    const doesPlayback = ['audio', 'video'].indexOf(mediaType) !== -1;
    const icon = doesPlayback ? 'Play' : 'Folder';
    const label = doesPlayback ? 'Play' : 'View';

    return (
      <Link secondary disabled={disabled} label={label} icon={icon} onClick={() => this.watch()} />
    );
  }
}

export default VideoPlayButton;

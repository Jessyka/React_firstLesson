import _ from 'lodash'; 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from '../src/components/searchBar'
import VideoList from '../src/components/videoList'
import VideoDetail from '../src/components/videoDetail'

const APP_KEY = '';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null } ;

        this.videoSearch('surfboards');
        
    }

    videoSearch(term){
        YTSearch ({key: APP_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] }); 
        });
    }

    render(){
        const videoSeach = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (    
            <div> 
                <SearchBar onSearchTermChange={videoSeach}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
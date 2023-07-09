import React, { useState } from 'react';
import TagButton from './TagButton';
import TagPosts from './TagPosts';

const TagPage = () => {
    const tags = [
        { name: '첫글', hashtag: '#첫글'},
        { name: '새글', hashtag: '#새글'},
        { name: '블로그', hashtag: '#블로그'}
    ];
    const [selectedTag, setSelectedTag] = useState('');

    const handleTagClick = (hashtag) => {
        setSelectedTag(hashtag);
    }

    return (
        <div>
            <h2>태그</h2>
            {tags.map(tag => (
                <TagButton key={tag.name} tag={tag.name} onClick={() => handleTagClick(tag.hashtag)} />
            ))}
            {selectedTag && <TagPosts tag={selectedTag} />}
        </div>
    );
}

export default TagPage;

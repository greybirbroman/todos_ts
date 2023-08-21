'use client';
import { useState } from 'react';
import { categories } from '../contsants';
import { Tag } from '@/types';

const useTagsBar = () => {
  const [tags, setTags] = useState<Tag[]>(categories);
  const [selectedTagsInModal, setSelectedTagsInModal] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const resetTagsInModal = () => {
    setSelectedTagsInModal([]);
  };

  const resetTags = () => {
    setSelectedTags([])
  }

  const handleSelectTagInModal = (selectedTag: Tag) => {
    if (selectedTagsInModal.some((tag: Tag) => tag.name === selectedTag.name)) {
      setSelectedTagsInModal(
        selectedTagsInModal.filter((tag: Tag) => tag.name !== selectedTag.name)
      );
    } else {
      setSelectedTagsInModal([...selectedTagsInModal, selectedTag]);
    }
  };

  const handleSelectTag = (selectedTag: Tag) => {
    if (selectedTags.some((tag: Tag) => tag.name === selectedTag.name)) {
      setSelectedTags(
        selectedTags.filter((tag: Tag) => tag.name !== selectedTag.name)
      );
    } else {
      setSelectedTags([...selectedTags, selectedTag]);
    }
  };
  return {
    tags,
    selectedTags,
    selectedTagsInModal,
    setSelectedTagsInModal,
    handleSelectTag,
    handleSelectTagInModal,
    resetTagsInModal,
    resetTags,
  };
};

export default useTagsBar;

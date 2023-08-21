import { ReactNode } from 'react';
import { ModalProvider } from '@/utils/context/ModalContext';
import { TodoProvider } from '@/utils/context/TodosContext';
import { PriorityBarProvider } from '@/utils/context/PriorityBarConext';
import { TagsBarProvider } from '@/utils/context/TagsBarContext';
import { SearchBarProvider } from '@/utils/context/SearchContext';
import { LocalStorageProvider } from '@/utils/context/LocalStorageContext';

interface GlobalStateProps {
  children: ReactNode;
}

const GlobalState = ({ children }: GlobalStateProps) => {
  return (
    <TodoProvider>
      <ModalProvider>
        <PriorityBarProvider>
          <TagsBarProvider>
            <SearchBarProvider>
              <LocalStorageProvider>{children}</LocalStorageProvider>
            </SearchBarProvider>
          </TagsBarProvider>
        </PriorityBarProvider>
      </ModalProvider>
    </TodoProvider>
  );
};

export default GlobalState;

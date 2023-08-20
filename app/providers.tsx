import { ModalProvider } from '@/utils/context/ModalContext';
import { TodoProvider } from '@/utils/context/TodosContext';
import { PriorityBarProvider } from '@/utils/context/PriorityBarConext';
import { TagsBarProvider } from '@/utils/context/TagsBarContext';
import { SearchBarProvider } from '@/utils/context/SearchContext';

const GlobalState = ({ children }) => {
  return (
    <TodoProvider>
      <ModalProvider>
        <PriorityBarProvider>
          <TagsBarProvider>
            <SearchBarProvider>{children}</SearchBarProvider>
          </TagsBarProvider>
        </PriorityBarProvider>
      </ModalProvider>
    </TodoProvider>
  );
};

export default GlobalState;

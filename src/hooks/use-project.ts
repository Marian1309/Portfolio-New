import { create } from 'zustand';

import type { Project } from '@/types';

import { PROJECTS } from '@/lib/constants';

type State = {
  project: Project;
  setProject: (project: Project) => void;
};

const useProject = create<State>((set) => ({
  project: PROJECTS[0],
  setProject: (project) => set({ project })
}));

export default useProject;

export const techLabel = (name, t) => t.techLabels[name] ?? name;

export const localizeProject = (project, t) => {
  const text = t.projects.items[project.slug];
  return {
    ...project,
    ...text,
    images: project.images.map((image, index) => ({
      ...image,
      alt: t.projects.screenshotAlt(text.title, index + 1),
    })),
  };
};

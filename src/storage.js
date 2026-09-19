const STORAGE_KEY = "projectApp:projects";

function loadProjects() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw === null ? [] : JSON.parse(raw);
    } catch (err) {
        console.warn("Could not read saved projects:", err);
        return [];
    }
}

function saveProjects(projects) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (err) {
        console.warn("Could not save projects:", err);
    }
}


export { loadProjects, saveProjects };
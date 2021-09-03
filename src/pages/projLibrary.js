import './styles/projLibrary.css';

import { useState, useEffect } from 'react';

import Filter from '../components/projLibrary/filter';
import ProjectItem from '../components/projLibrary/projItem';
import LevelFilter from '../components/projLibrary/levelFilter';


const ProjectLibrary = () =>  {

    const [filtered, setFiltered] = useState([]);
    const [subFilter, setSubFilter] = useState([]);
    const [actFilter, setActFilter] = useState([]);
    const [yearFilter, setYearFilter] = useState([]);
    const [subjectFilter, setSubjectFilter] = useState([]);
    const [levelFilter, setLevelFilter] = useState('');
    const [projects, setProjects] = useState([]);


    const getProjects = () => {

        fetch ('http://localhost:4000/projects')
        .then (response => response.json())
        .then (json => setProjects(json))
        .catch (err => console.log(err))
    }


    useEffect (() => {
        getProjects()
    }, [])

    useEffect(() => {
        setFiltered(projects)
    }, [projects])

    const handleLevelFilter = (event, newLevelFilter) => {
        setLevelFilter(newLevelFilter)
    }

    const handleSubscriptionFilter = (event) => {
        let newFilter = event.target.value;
        if (subFilter.includes(newFilter)) {
            setSubFilter(subFilter.filter(filter => filter !== newFilter))
        } else {
            setSubFilter([...subFilter, newFilter])
        }
    }

    const handleActTypeFilter = (event) => {
        let newFilter = event.target.value;
        if (actFilter.includes(newFilter)) {
            setActFilter(actFilter.filter(filter => filter !== newFilter))
        } else {
            setActFilter([...actFilter, newFilter])
        }
    }

    const handleYearFilter = (event) => {
        let newFilter = event.target.value;
        if (yearFilter.includes(newFilter)) {
            setYearFilter(yearFilter.filter(filter => filter !== newFilter))
        } else {
            setYearFilter([...yearFilter, newFilter])
        }
    }

    const handleSubMatterFilter = (event) => {
        let newFilter = event.target.value;
        if (subjectFilter.map(item => "--" + item).includes("--" + newFilter)) {
            setSubjectFilter(subjectFilter.filter(filter => filter !== newFilter))
        } else {
            setSubjectFilter([...subjectFilter, newFilter])
        }
    }

    const handleFilteredProjects = () => {

        setFiltered(
			projects.filter(project => {
				if (subFilter.length && !subFilter.includes(project.subscription)) return false
				if (actFilter.length && !actFilter.includes(project.activity_type)) return false
				if (yearFilter.length && !yearFilter.toString().split(",").includes(project.year+"")) return false
				if (subjectFilter.length && !subjectFilter.map(item => "--" + item).includes(("--" + project.subject_matter1) || ("--" + project.subject_matter2) || ("--" + project.subject_matter3))) return false
				if (levelFilter && levelFilter !== project.course) return false;
				return project
			}
			)
		)
    }

    useEffect(() => {
        console.log('useEffect triggered')
        handleFilteredProjects()
    }, [subFilter, actFilter, yearFilter, subjectFilter, levelFilter]);

    const filters = {
        subscription: ['Free', 'Premium'],
        activityType: ['Animation', 'Game', 'Chatbot', 'Augmented Reality'],
        yearLevel: [[1,2,3,4], [5,6], [7,8], [9,10,11,12,13]],
        subjectMatter: ['Computer Science', 'Maths', 'Science', 'Language', 'Art', 'Music']
    }

    return (
        <>
            <div className = 'projects-wrapper'>
                
                <div className = 'title-wrap'>
                    <h2 className = 'title-text'>PROJECTS</h2>
                    <p className = 'project-text'>Welcome to the project library. You can use the filters on the left to help you search for specific projects.</p>
                </div>

                <LevelFilter 
                                levelFilter = {levelFilter}
                                handleLevelFilter = {handleLevelFilter}
                            />


                <div className = 'core-wrap'>
                    <div className = 'filter-wrapper'>

                        <Filter
                            filters = {filters}
                            filterTitle = "Subscription"
                            filterState = {subFilter}
                            filterArray = {filters.subscription}
                            filterHandler = {handleSubscriptionFilter}
                            key = 'Subscription'
                        />

                        <Filter
                            filters = {filters}
                            filterTitle = "Activity Type"
                            filterState = {actFilter}
                            filterArray = {filters.activityType}
                            filterHandler = {handleActTypeFilter}
                            key = "Activity Type"
                        />

                        <Filter
                            filters = {filters}
                            filterTitle = "Year Level"
                            filterState = {yearFilter}
                            filterArray = {filters.yearLevel}
                            filterHandler = {handleYearFilter}
                            key = "Year Level"
                        />

                        <Filter
                            filters = {filters}
                            filterTitle = "Subject Matter"
                            filterState = {subjectFilter}
                            filterArray = {filters.subjectMatter}
                            filterHandler = {handleSubMatterFilter}
                            key = "Subject Matter"
                        />
                    </div>

                        

                        <div className = 'project-wrap' >
                        
                                
                            {
                                filtered.map(project => (
                                    <ProjectItem project = {project} key ={project.project_name} />
                                ))
                            }


                        </div>
                </div>

                         
            </div>
        </>
    )

}

export default ProjectLibrary;
package de.arthurkaul.archref.restController;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import de.arthurkaul.archref.exceptions.RepositoryAlreadyExistException;
import de.arthurkaul.archref.exceptions.RepositoryNotFoundException;
import de.arthurkaul.archref.model.Repository;
import de.arthurkaul.archref.services.RepositoryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RepositoryController {

	   @Autowired
	    RepositoryService repositoryService;
	

	@RequestMapping(value="/api/repositories", method = RequestMethod.GET)
	public ResponseEntity<Collection<Repository>> getAllRepositories() {
		
		Collection<Repository> repositories =  repositoryService.findAllRepository();
		
		  if (repositories.isEmpty()) {
			  System.out.println("THROW ERROR");
			  throw new RepositoryNotFoundException("RepositoryNotFoundException: No Repository found. No Repository exist.");  
          // You many decide to return HttpStatus.NOT_FOUND
       }
        return ResponseEntity.ok().body(repositories);
	}
	

	@RequestMapping(value="/api/repositories/{id}", method = RequestMethod.GET)
	public ResponseEntity<Repository> getRepository(@PathVariable("id") long id) {

		Repository repository = repositoryService.findById(id);
		
		  if (repository == null) {
			throw new RepositoryNotFoundException("RepositoryNotFoundException: Unable to find Repository. Repository with id " + id + " not found.");          	
       
       }
		return ResponseEntity.ok().body(repository);
	}
	
	
	@RequestMapping(value = "/api/repositories", method = RequestMethod.POST)
    public ResponseEntity<Repository> createRepository(@RequestBody Repository repository, UriComponentsBuilder ucBuilder) {
		
		if (repository.getId() != null) {
			throw new RepositoryAlreadyExistException("RepositoryAlreadyExistException: Unable to create Repository. Repository with id " + repository.getId() + " already exist.");          	
        }
		
		Repository saved = repositoryService.create(repository);
      
        return ResponseEntity.created(ucBuilder.path("/api/repositories/{id}").buildAndExpand(repository.getId()).toUri()).body(saved);
       
     }
 
    @RequestMapping(value = "/api/repositories{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateRepository(@PathVariable("id") long id, @RequestBody Repository repository) {
 
    	Repository currentRepository = repositoryService.findById(id);
 
        if (currentRepository == null) {
        	throw new RepositoryNotFoundException("RepositoryNotFoundException: Unable to update. Repository with id " + id + " not found.");          
        }
 
        currentRepository.setName(repository.getName());
 
        repositoryService.update(repository);
        return ResponseEntity.ok().body(currentRepository);
    }
 
 
    @RequestMapping(value = "/api/repositories/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteRepository(@PathVariable("id") Long id) {

    	Repository repository = repositoryService.findById(id);
		
		if (repository == null) {
			throw new RepositoryNotFoundException("RepositoryNotFoundException: Unable to delete Repository. Repository with id " + id + " not found.");          	
        }
		
		repositoryService.delete(id);

        return ResponseEntity.noContent().build();
    }
 
 
    @RequestMapping(value = "/repositories/", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteAllRepositories() {

    	repositoryService.deleteAllRepositories();
        return ResponseEntity.noContent().build();
    }
	
	
	@ExceptionHandler(RepositoryNotFoundException.class)  
	 
	public String exceptionHandler(Exception e){  
		System.out.println("THROW ERROR HANDLER");
		return e.getMessage();     	        
	}  
	
	
}

package de.arthurkaul.archref.services.topology;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.arthurkaul.archref.model.topology.RelationshipTemplate;
import de.arthurkaul.archref.repositories.topology.RelationshipTemplateRepository;

@Service
public class RelationshipTemplateService implements RelationshipTemplateInterface{
	
	@Autowired
	RelationshipTemplateRepository relationshipTemplateRepository;
	
	@Override
	public Collection<RelationshipTemplate> findAllRelationshipTemplates() {
		return relationshipTemplateRepository.findAll();
	}

	@Override
	public RelationshipTemplate findById(long id) {
		return relationshipTemplateRepository.findOne(id);
	}

	@Override
	public RelationshipTemplate create(RelationshipTemplate relationshipTemplate) {
		if (relationshipTemplate.getId() != null) {
			return null;
        }
		return relationshipTemplateRepository.save(relationshipTemplate);
	}

	@Override
	public RelationshipTemplate update(RelationshipTemplate relationshipTemplate) {
		RelationshipTemplate persistedRelationshipTemplate= relationshipTemplateRepository.findOne(relationshipTemplate.getId());

        if (persistedRelationshipTemplate == null) {
            return null;
        }

		return relationshipTemplateRepository.save(relationshipTemplate);
	}

	@Override
	public void delete(long id) {
		relationshipTemplateRepository.delete(id);		
	}

	@Override
	public void deleteAllRelationshipTemplates() {
		relationshipTemplateRepository.deleteAll();
	} 

}

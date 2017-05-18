package de.arthurkaul.archref.services.topologytemplate;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.arthurkaul.archref.model.topologyTemplate.TopologyTemplate;
import de.arthurkaul.archref.repositories.TopologyTemplateRepository;



@Service
public class TopologyTemplateService implements TopologyTemplateInterface{
	
	@Autowired
	TopologyTemplateRepository topologyTemplateRepository;
	
	@Override
	public Collection<TopologyTemplate> findAllTopologyTemplate() {
		return topologyTemplateRepository.findAll();
	}

	@Override
	public TopologyTemplate findById(long id) {
		return topologyTemplateRepository.findOne(id);
	}

	@Override
	public TopologyTemplate create(TopologyTemplate topologyTemplate) {
		
		if (topologyTemplate.getId() != null) {
			return null;
        }
		return topologyTemplateRepository.save(topologyTemplate);
	}

	@Override
	public TopologyTemplate update(TopologyTemplate topologyTemplate) {
		TopologyTemplate persistedTopologyTemplate = topologyTemplateRepository.findOne(topologyTemplate.getId());

        if (persistedTopologyTemplate == null) {
            return null;
        }
		return topologyTemplateRepository.save(topologyTemplate);
	}

	@Override
	public void delete(long id) {
		topologyTemplateRepository.delete(id);		
	}

	@Override
	public void deleteAllTopologyTemplates() {
		topologyTemplateRepository.deleteAll();		
	}
	
	
	

	
}